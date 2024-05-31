import { SelectArray } from "../../interfaces/interfaces"

const CustomSelect = (props:{items:SelectArray, onChange: (selectedValue: string) => void, name:string, description:string}) => {
  const {items, onChange, name, description} = props

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value
    onChange(selectedOption)
  }
  return (
    <form className="max-w-sm">
    <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{description}</label>
    <select name={name} defaultValue={items[1].key} onChange={handleChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {items.map((item, index) => (
            <option key={index} value={item.key}>{item.value}</option>
        ))}
    </select>
    </form>
  )
}

export default CustomSelect