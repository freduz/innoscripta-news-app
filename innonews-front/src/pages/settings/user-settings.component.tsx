import React, { useEffect, useState } from 'react'
import SelectBox from '../../components/select/select.component'
import { useAuthorsMutation, useCategoriesMutation, useSourcesMutation } from '../../store/slices/preferenceApiSlice'
import {useDispatch,useSelector} from 'react-redux';
import { setAuthors, setCategories, setSources } from '../../store/slices/preferenceSlice';
import { RootState } from '../../store/store';
import { useAddMutation, useFindAllMutation } from '../../store/slices/settingsApiSlice';
import { setPereferences } from '../../store/slices/settingsSlice';
import {toast} from 'react-toastify'

interface UserSettingsProps{

}

  


const UserSettings:React.FC<UserSettingsProps> = (props) => {

    useEffect(() => {
        const loadPrefrences = async () => {
              const preferences = await settingsCaller('').unwrap();
              dispatch(setPereferences(preferences))
            
              
        }
      
        loadPrefrences();
      },[])
   

        const [selectedCategories,setSelectedCategories] = useState([]);
        const [selectedAuthors,setSelectedAuthors] = useState([]);
        const [selectedSources,setSelectedSources] = useState([]);

        const [categoryCaller] = useCategoriesMutation();
        const [authorsCaller] = useAuthorsMutation();
        const [sourcesCaller] = useSourcesMutation();
        const [settingsAddCaller] = useAddMutation();
        const [settingsCaller] = useFindAllMutation();
        const dispatch = useDispatch();
        const {categories,authors,sources} = useSelector((state:RootState) => state.preferences)
        const {user:{id}} = JSON.parse(localStorage.getItem('userInfo') as string); 
        const {categories:savedcategories,authors:savedauthors,sources:savedsources} = useSelector((state:RootState) => state.settings.preferences)

        const onCategorySearch = async (val:string) =>{
               const categories = await categoryCaller(val).unwrap();
               dispatch(setCategories(categories))
            }

        const onAuthorsSearch = async (val:string) => {
            const authors = await authorsCaller(val).unwrap();
            dispatch(setAuthors(authors))
        }

        const onSourcesSearch = async (val:string) => {
            const sources = await sourcesCaller(val).unwrap();
            dispatch(setSources(sources))
        }


        const categoriesSelectHandler = (val:any) => {
            setSelectedCategories(val);
        }

        const sourcesSelectHandler = (val:any) => {
            setSelectedSources(val)
        }

        const authorsSelectHandler = (val:any) => {
            setSelectedAuthors(val)
        }

        const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            try {
                const payload = {
                    sources:formatData(selectedSources.length !== 0 ? selectedSources : savedsources),
                    categories:formatData(selectedCategories.length !== 0 ? selectedCategories : savedcategories),
                    authors:formatData(selectedAuthors.length !== 0 ? selectedAuthors : savedauthors),
                    id
                }
               const res= await settingsAddCaller(payload)
               console.log(res);
               
               toast.success('Your preferences saved successfully')
            } catch (error) {
                console.log(error)
            }
           
        }

        const formatData = (data:any)=> {
            const formattedData = data.map((dt:any) => {
                return dt['cat']
            });
            return formattedData;
        }




  return (
    <section className='container mx-auto'>
    <div className="min-h-screen pt-2 font-mono my-16">
        <div className="container mx-auto">
            <div className="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 className="text-2xl text-gray-900">Preferences Setting</h2>
                <form className="mt-6 border-t border-gray-400 pt-4" onSubmit={handleSubmit}>
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full md:w-full px-3 mb-6'>
                            <SelectBox options={sources} label='Select sources' onSearch={onSourcesSearch} onSelect={sourcesSelectHandler} selectedValues={savedsources} />
                        </div>
                        <div className='w-full md:w-full px-3 mb-6'>
                        <SelectBox options={categories} label='Select categories' onSearch={onCategorySearch} onSelect={categoriesSelectHandler} selectedValues={savedcategories}/>
                        </div>
                        <div className='w-full md:w-full px-3 mb-6'>
                        <SelectBox options={authors} label='Select authors' onSearch={onAuthorsSearch} onSelect={authorsSelectHandler} selectedValues={savedauthors}/>
                        </div>
                        <div className='w-full md:w-full px-3 mb-6 '>
                            <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">Save Preferences</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section>
  )
}

export default UserSettings