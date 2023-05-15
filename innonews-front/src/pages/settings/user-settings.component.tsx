import React from 'react'
import SelectBox from '../../components/select/select.component'

interface UserSettingsProps{

}

const UserSettings:React.FC<UserSettingsProps> = (props) => {
  return (
    <section className='container mx-auto'>
    <div className="min-h-screen pt-2 font-mono my-16">
        <div className="container mx-auto">
            <div className="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 className="text-2xl text-gray-900">Preferences Setting</h2>
                <form className="mt-6 border-t border-gray-400 pt-4">
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full md:w-full px-3 mb-6'>
                            <SelectBox options={[]} label='Select sources'/>
                        </div>
                        <div className='w-full md:w-full px-3 mb-6'>
                        <SelectBox options={[]} label='Select categories'/>
                        </div>
                        <div className='w-full md:w-full px-3 mb-6'>
                        <SelectBox options={[]} label='Select authors'/>
                        </div>
                        <div className='w-full md:w-full px-3 mb-6 '>
                            <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">Save Preferences</button>
                        </div>
                        
                        <div className="personal w-full border-t border-gray-400 pt-4">
                            <h2 className="text-2xl text-gray-900">Personal info:</h2>
                            <div className="flex items-center justify-between mt-4">
                                <div className='w-full md:w-1/2 px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required/>
                                </div>
                                <div className='w-full md:w-1/2 px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required/>
                                </div>
                            </div>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>user name</label>
                                <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required/>
                            </div>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                <textarea className='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  required></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">save changes</button>
                            </div>
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