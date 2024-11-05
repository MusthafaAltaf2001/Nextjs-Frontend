'use client'

import React from 'react'
import { submitJoke } from "@/actions/actions"
import { Input, Select } from 'antd'
import { Form } from 'antd'
import type { FormProps, MenuProps } from 'antd';
import { JokeFormProps, JokeTypeProps } from '@/lib/types'
import Heading from '../ui/Heading'

const SubmitJoke = ({ jokeTypeList }: { jokeTypeList: JokeTypeProps[] }) => {
    const [form] = Form.useForm();

    console.log(jokeTypeList)

    const onFinish: FormProps<JokeFormProps>['onFinish'] = (values) => {
        console.log(values)
        submitJoke(values)
    };

    return (
        <div className='flex flex-col gap-4'>
            <Heading text="Submit a Joke" />
            <Form onFinish={onFinish} form={form} className="space-y-4 flex flex-col">
                <Form.Item<JokeFormProps>
                    name='content'
                    label="Enter your joke"
                    className='text-white'
                    rules={[{ required: true, message: 'Please enter a Joke' }]}
                >
                    <Input.TextArea
                        placeholder="Type your joke here..."
                    />
                </Form.Item>

                <Form.Item<JokeFormProps>
                    htmlFor="type"
                    name='type'
                    label="Select your joke type"
                    rules={[{ required: true, message: 'Please select a Joke Type' }]}
                >
                    <Select placeholder="Select a Joke Type">
                        {jokeTypeList.map((jokeType: JokeTypeProps) => {
                            return (
                                <Select.Option key={jokeType.joke_type_id} value={jokeType.joke_type_name}>
                                    {jokeType.joke_type_name}
                                </Select.Option>
                            )
                        })}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <button type="submit" className="button">
                        Submit
                    </button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SubmitJoke