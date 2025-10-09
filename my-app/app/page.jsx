import React from 'react'
import { getData} from "@/utils/getData"
import ListI from '@/component/List';
export default async function Home() {
  const usersData = await getData("https://dummyjson.com/users");
  const postsData = await getData("https://dummyjson.com/posts");
  const recipesData = await getData("https://dummyjson.com/recipes");
  console.log(usersData.users);
  
  return (
<div>
<ListI items={usersData?.users || []}/>
</div>
  )
}
