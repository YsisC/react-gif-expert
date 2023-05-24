import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export default function GifExpertApp () {

    const [categories, setCategories] = useState(["One Punch"])

    const onAddCategory = (newCategory) => {
        //no repetir las categorias
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
        // setCategories(cat=>[...cat, "valorant"])
    }

    return (
        <>
            <h1>Gif expert App</h1>
            <AddCategory
             onNewCategory={(value) => onAddCategory(value)} />

                {categories.map((category) => (
                        <GifGrid 
                        key={ category }
                        category={category} 
                        />
                    ))
                
                }
      
            {/* Gifs Item */}
        </>
    )
}
