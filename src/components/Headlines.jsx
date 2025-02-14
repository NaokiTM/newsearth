import LoadArticles from "./LoadArticles";

const Headlines = () => {

  return (
    <div>
        <div className="flex flex-col items-center justify-center text-red-600 text-l tracking-tight">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="animate text-2xl p-4 font-bold w-70">
              US Breaking Headlines
            </div>
          </div>
          <LoadArticles />
        </div>
    </div>
  )
}

export default Headlines