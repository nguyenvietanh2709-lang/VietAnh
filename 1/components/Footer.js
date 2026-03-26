
export default function Footer() {
  return (
    <footer className="w-full mt-auto">
  
      <div className="bg-[#435761] text-white p-4 w-full">
        <h5 className="text-lg font-medium ml-4">Footer</h5>
      </div>
      <div className="bg-[#303e45] text-white py-4 w-full">
        <p className="text-sm ml-4">
          Powered by{" "}
          <a 
            href="https://www.w3schools.com/w3css/default.asp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-green-400 transition-colors"
          >
            w3.css
          </a>
        </p>
      </div>
    </footer>
  );
}