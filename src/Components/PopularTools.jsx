import ToolBox from "./ToolBox";
import '../App.css';
import toolsArray from "../Data/toolsArray";

const PopularTools = () => {
  return (
    <main className="my-7 w-11/12 mx-auto lg:w-full">
        <h2 className="text-lg font-semibold">Most Popular Tools</h2>
        <p className="text-sm text-[#9893a3] mb-4">Explore the trending tools to create your copies fast</p>

        <section className="pt-1 px-1 lg:bg-[#F4F3F6] rounded-t-2xl">
            <h3 className="text-retink-grey mb-2.5 font-semibold">Blog Writing.</h3>
            <div className="flex gap-3 w-full overflow-x-scroll tools py-1">
                {
                    toolsArray.map(({description, icon, title}, i) => <ToolBox key={i} title={title} description={description} icon={icon} /> )
                }
            </div>
        </section>

        <section className="pt-7 px-1 lg:bg-[#F4F3F6] rounded-b-2xl">
            <h3 className="text-retink-grey mb-3.5 font-semibold">Social media</h3>
            <div className="flex gap-3 w-full overflow-x-scroll tools py-1">
                {
                    toolsArray.map(({description, icon, title}, i) => <ToolBox key={i} title={title} description={description} icon={icon} /> )
                }
            </div>
        </section>
    </main>
  )
}

export default PopularTools