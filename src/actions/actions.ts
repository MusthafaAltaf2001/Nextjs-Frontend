'use server'
import axios from "axios"
import { revalidatePath } from "next/cache"
import { JokeFormProps } from "@/lib/types"
import { SUBMIT_JOKE_URL } from "@/lib/constants"

export async function submitJoke(jokeData: JokeFormProps) {
    console.log(jokeData)
    const { content, type } = jokeData
    try {
        await axios.post(`${SUBMIT_JOKE_URL}`, { content: content, type: type })
            .then(res => console.log(res))
    } catch (err) {
        console.log(err)
    }
    // revalidatePath('/')
}

export async function getAllJokeTypes() {
    try {
        const allJokeTypes = await axios.get(`${SUBMIT_JOKE_URL}`)
        return allJokeTypes.data
    } catch (err) {
        console.log(err)
    }
}