import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchUsersCategory } from '../../redux/slices/usersSlice';

const ProviverServiceCtg = () => {
    const {categoryName} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsersCategory(categoryName))
    },[categoryName])
    const categorizedUsers = useSelector((state) => state?.users.categorizedUser[0]);

    console.log(categorizedUsers);

    return (
        <div>
            ProviverServiceCtg
            {
                categorizedUsers?.map(ctgUser=><li><img src={ctgUser.img} alt="" /></li>)
            }
        </div>
    );
};

export default ProviverServiceCtg;

const a =[
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Driver",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Electrician",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Driver",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Cleaner",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Driver",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Cleaner",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Baby Sitter",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Baby Sitter",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Baby Sitter",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Baby Sitter",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Electrician",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Electrician",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Baby Sitter",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Baby Sitter",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Plumber",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Plumber",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Electrician",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Driver",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Driver",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Electrician",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Cleaner",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Cleaner",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Cleaner",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
    {
        name:"Ryan Olson",
address:"195 Scenic Way",
img:"https://www.familyhandyman.com/wp-content/uploads/2020/11/electrician-GettyImages-1173754383.jpg",
email:"rayan@yahoo.com",
area:"Liberty",
category:"Baby Sitter",
bio:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore...",
password:"123456789a",
confirmPassword:"123456789a",
joined:"Mon Jan 03 2022"
    },
]