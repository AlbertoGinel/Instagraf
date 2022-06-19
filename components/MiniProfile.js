function MiniProfile() {
  return (
    <div className="flex items-center justify-between 
    mt-14 ml-10">
      <img 
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31cd9122564011.56314c9e85467.jpg" 
        alt="grunt"/>

        <div className="flex-1 mx-4">
          <h2 className="font-bold">Grunt</h2>
          <h3 className="text-sm text-gray-400">Welcome to Instagraf</h3>
        </div>

        <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  )
}

export default MiniProfile