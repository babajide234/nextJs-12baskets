import { useState, useEffect } from 'react';
import { 
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Button,
    OutlinedInput,
    InputAdornment,
    Input,
    Chip
} from '@mui/material/'

import useUserStore from 'src/@core/store/userStore';
import useStoreSlice from 'src/@core/store/storeSlice';

import { instance } from 'src/@core/hooks/service';
import useProductsSlice from 'src/@core/store/productSlice';

const AddProductForm = () => {

    const addProduct = useProductsSlice( (state)=> state.addProduct);
    const categories = useProductsSlice( (state)=> state.categories);
    const setCategories = useProductsSlice( (state)=> state.setCategories);
    const stores = useStoreSlice( (state)=> state.stores);
    const setStore = useStoreSlice( (state)=> state.setStore);
    
    const token  = useUserStore( (state) => state.user)

    const [formData, setFormData] = useState({
        store_id: "",
        name: "",
        quantity: "",
        amount: "",
        details: "",
        weight: "",
        category_id: "",
        sub_category_id: "",
        main_photo: "",
        photo_a: "",
        photo_b: "",
        photo_c: "",
        photo_d: "",
        photo_e: "",
        active: ""
    });

    const [mainPhoto, setMainPhoto] = useState(null);

    // const [category, setCategories] = useState([]);

    const [subcategory, setSubCategories] = useState([]);

    useEffect(() => {
        setCategories({
            token,
            category_id: ""
        })
        setStore({
            token,
            store_id: "",
            location: "",
            store: "",
            page: "",
            limit: ""
        })
    }, [token,setCategories,setStore])

    const handleFileSelect = (event) => {
        const selectedImage = event.target.files[0];
        if (selectedImage && selectedImage.type.includes("image")) {
            setMainPhoto(selectedImage);
        } else {
          setImage(null);
        }
    };

    const check = (value) =>{

        return value == '';
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if( check(formData.name) || check(formData.amount) || check(formData.details)  ){

            return
        }

        const data = {
            token,
            store_id : formData.store_id,
            name : formData.name,
            quantity : formData.quantity,
            amount : formData.amount,
            details : formData.details,
            weight : formData.weight,
            category_id : formData.category_id,
            sub_category_id : formData.sub_category_id,
            main_photo : formData.main_photo,
            photo_a : formData.photo_a,
            photo_b : formData.photo_b,
            photo_c : formData.photo_c,
            photo_d : formData.photo_d,
            photo_e : formData.photo_e,
            active : formData.active,
        }

        addProduct(data)
    }

    const handleImageUpload = async () => {
        if (!mainPhoto) {
          return;
        }
    
        const formData = new FormData();
        formData.append("token", token);
        formData.append("file", mainPhoto);
    
        try {
          const response = await instance.post("misc/file-upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          if(response.data.status == 'success'){
              console.log(response.data.file_url);
              setFormData({ ...formData, ['main_photo']: response.data.file_url });
          }
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={7}>
                <Grid item xs={12} sm={12}>
                    <Typography variant='h5' sx={{ marginBottom: 2 }}>Add New Product</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl fullWidth size='small'>
                        <InputLabel id="demo-simple-select-label">Store</InputLabel>
                        <Select
                            name='store_id'
                            value={formData.store_id}
                            label="Store"
                            onChange={handleChange}
                        >
                            {
                                stores?.map(item => (
                                    <MenuItem key={item.store_id} value={item.store_id}>{item.name}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <TextField fullWidth size='small' label='Name'  name='name' placeholder='name'  value={formData.name} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth size='small' label='Quantity' type="number"  name='quantity' placeholder='quantity'  value={formData.quantity} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">&#8358;</InputAdornment>}
                            label="Amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            size='small'
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField multiline minRows={3} size='small' fullWidth label='Details' type="text"  name='details' placeholder='Details'  value={formData.details} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField fullWidth size='small' label='Weight' type="text"  name='weight' placeholder='weight'  value={formData.weight} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size='small'>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            name='category_id'
                            value={formData.category_id}
                            label="Category"
                            onChange={handleChange}
                        >
                            {/* {
                                categories ? (
                                    categories.map(item => (
                                        <MenuItem key='1' value={10}>Ten</MenuItem>
                                    ))
                                ):(
                                    <>
                                    </>
                                )
                            } */}
                            <MenuItem value={20}>DISCOUNTED PRICES PER PACK</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size='small'>
                        <InputLabel id="demo-simple-select-label">Subcategory</InputLabel>
                        <Select
                            name='sub_category_id'
                            value={formData.sub_category_id}
                            label="Subcategory"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ display:"flex", alignItems:"center"}}>
                    {
                        formData.main_photo ? (
                            <>
                            <label htmlFor="btn-upload">
                        <input
                            id="btn-upload"
                            style={{ display: 'none' }}
                            type="file"
                            onChange={handleFileSelect} 
                            accept="image/*"
                        />
                        <Button
                            className="btn-choose"
                            variant="outlined"
                            component="span" >
                            Choose Files
                        </Button>
                    </label>
                    {mainPhoto && <p>Selected file: {mainPhoto.name}</p>}
                    <Button onClick={handleImageUpload} disabled={!mainPhoto}>upload</Button>
                            </>
                        ):(
                            <Chip variant="outlined" color="success" size="small" label={formData.main_photo} />
                        )
                    }
                    
                </Grid>
                <Grid item xs={12} >
                    <Button variant='contained' type='submit' sx={{ float:"right"}}>
                    Save
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default AddProductForm;