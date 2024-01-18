'use client'
import React, { useState,startTransition,useEffect } from 'react'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { ICategory } from '@/lib/database/models/category.model';

type DropDownProps={
    value?:string;
    onChangeHandler?:()=>void
}
const DropDown = ({value, onChangeHandler}: DropDownProps) => {
    const [categories,setCategories] = useState<ICategory[]>([])
    const [newCategory,setNewCategory] = useState('')

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Categoria" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 && categories.map((category) => (
          <SelectItem key={category._id} value={category._id} className="select-item p-regular-14">
            {category.name}
          </SelectItem>
        ))}
        </SelectContent>
        </Select>
  )
}

export default DropDown