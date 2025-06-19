import { useState } from "react"
import AddCategory from "./components/AddCategory";


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return

    setCategories([...categories, newCategory]);
  }


  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        addCategory={onAddCategory}
      />

      <ol>
        {categories.map(c => { return <li key={c}>{c}</li> })}
      </ol>

    </>
  )
}

export default GifExpertApp
