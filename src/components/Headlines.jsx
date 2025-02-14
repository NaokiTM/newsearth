import LoadArticles from "./LoadArticles";

const Headlines = () => {

  return (
    <div>
        <div className="flex flex-col items-center justify-center text-red-600 text-l tracking-tight">
          <div className="text-3xl p-4 text-">US Headlines</div>

          <LoadArticles />
        </div>
    </div>
  )
}

export default Headlines