import { useState, useEffect } from "react"
import { redirect, useRouter } from "next/navigation"

import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import SubmitJoke from "./SubmitJoke"
import RetrieveJoke from "./RetrieveJoke"
import { JokeTypeProps } from "@/lib/types";


export default function Homepage({ allJokeTypes }: { allJokeTypes: JokeTypeProps[] }) {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Submit a Joke',
            children: <SubmitJoke jokeTypeList={allJokeTypes} />,
        },
        {
            key: '2',
            label: 'Retrieve a Joke',
            children: <RetrieveJoke />,
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            <a href="/admin" className="button">
                Login
            </a>
            <div className="flex flex-col items-center">
                <Tabs className='ant-tabs' defaultActiveKey="1" items={items} />
            </div>
        </div>
    )
}