import React from 'react'
import { getData} from "@/utils/getData"
export default async function Home() {
  const usersData = await getData("https://dummyjson.com/users");
  const postsData = await getData("https://dummyjson.com/posts");
  const recipesData = await getData("https://dummyjson.com/recipes");
  return (
<div>

</div>
  )
}
