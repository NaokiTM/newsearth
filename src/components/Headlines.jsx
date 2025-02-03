import CurrentArticle from "./CurrentArticle"
const Headlines = () => {
  return (
    <div className="flex flex-col items-center justify-center text-red-600 text-4xl font-extrabold tracking-tight italic">
        <div>Headlines</div>
        <div>Select source below:</div>
            <select id="options" className="border border-gray-300 rounded-md cursor-pointer">
                <option value="US">United states headlines</option>
                <option value="UK">United Kingdom headlines</option>
                <option value="BBC">BBC news</option>
            </select>
        <CurrentArticle />
    </div>
  )
}

export default Headlines