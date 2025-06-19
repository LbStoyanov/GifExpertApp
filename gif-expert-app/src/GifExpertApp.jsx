import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return

    setCategories([...categories, newCategory]);
  }


  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        addCategory={onAddCategory}
      />

      {categories.map(c => (<GifGrid key={c} category={c} />))}


    </>
  )
}

export default GifExpertApp
