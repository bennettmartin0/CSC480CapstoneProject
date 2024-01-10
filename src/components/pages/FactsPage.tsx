import { PageTemplate } from "./PageTemplate";

export const FactsPage = () => (
    <PageTemplate headerImageURI="./src/assets/Home2.jpg" header="Sea Turtle Facts" showGauge={false}>
        <p className="text-sm my-4">Sea turtles are migratory marine reptiles whose ancestors have inhabited earth’s oceans since the late Triassic Period (about 205 million years before present). Nearly all species of sea turtle are now classified as endangered, with three of the seven existing species being critically endangered.</p>
        
        <img src={"./src/assets/Facts_LoggerHeadSeaTurtle.jpg"} className="w-[90%] m-[5%] mt-[10%] mb-[10px] rounded-md shadow-lg"/>
        <p className="text-sm my-4">Loggerhead, <i>Caretta Caretta</i>: Georgia’s most common nesting sea turtle; found in the Atlantic, Pacific, and Indian oceans and the Mediterranean Sea.</p>
        <br />
        <img src={"./src/assets/Facts_LeatherbackSeaTurtle.jpg"} className="w-[90%] m-[5%] mt-[10%] mb-[10px] rounded-md shadow-lg"/>
        <p className="text-sm my-4">Leatherback, <i>Dermochelys Coriacea</i>: Global distribution, perhaps the most widely distributed reptile on the planet; tolerates colder waters. They are the largest of all sea turtles and can reach nearly six feet in length.</p>
        <br />
        <img src={"./src/assets/Facts_GreenSeaTurtle.jpg"} className="w-[90%] m-[5%] mt-[10%] mb-[10px] rounded-md shadow-lg"/>
        <p className="text-sm my-4">Green, <i>Chelonia Mydas</i>: Occasionally found in Georgia waters; found primarily in tropical zones of the Atlantic, Pacific, and Indian oceans.</p>
        <br />
        <img src={"./src/assets/Facts_HawksbillSeaTurtle.jpg"} className="w-[90%] m-[5%] mt-[10%] mb-[10px] rounded-md shadow-lg"/>
        <p className="text-sm my-4">Hawksbill, <i>Eretmochelys Imbricata</i>: Found mostly in tropical waters of the Atlantic, Pacific, and Indian oceans; rarely sighted in Georgia, but two carcasses were found in 1998.</p>
        <br />
        <img src={"./src/assets/Facts_KempsRidleySeaTurtle.jpg"} className="w-[90%] m-[5%] mt-[10%] mb-[10px] rounded-md shadow-lg"/>
        <p className="text-sm my-4">Kemp’s Ridley (<i>Lepidochelys Kempii</i>): Found primarily in the Gulf of Mexico, though juveniles are found in the Atlantic Ocean during warm months.</p>
        <br />
        
        <img src={"./src/assets/Facts_OliveRidleySeaTurtle.jpg"} className="w-[90%] m-[5%] mt-[10%] mb-[10px] rounded-md shadow-lg"/>
        <p className="text-sm my-4">Olive Ridley (<i>Lepidochelys Olivacea</i>): The second-smallest and most abundant of all sea turtles found in the world. Found in warm and tropical waters, primarily in the Pacific and Indian Oceans, but also in warmer waters of the Atlantic Ocean. This turtle and the related Kemp's Ridley turtle are known for their unique synchronised mass nestings called <i>arribadas</i>, where thousands of females come together on the same beach to lay eggs.</p>
        <p className="text-sm my-4">Sea Turtle mating usually occurs offshore in shallow waters. A pregnant female will lumber ashore at night to lay her clutch of eggs, depositing them in a cavity dug with her hind feet. Clutch size can range from 80 to more than 100 eggs, and a single pregnant loggerhead female can lay an average of four nests per season.</p>
        <p className="text-sm my-4">When female sea turtles come ashore for nesting season, they nestle down in the sand to create indents called a "body pit."</p>
        <p className="text-sm my-4">Most female sea turtles return to the same beach each time they are ready to nest—they may even construct their new body pit and nest just a few yards away from the location of their last body pit! Sea turtle migration habits are a truly remarkable phenomenon in the animal kingdom.</p>
        <p className="text-sm my-4">The main threats to Georgia sea turtles are nest predation by hogs, raccoons, and dogs, and drowning as bycatch in longline and shrimping nets.</p>
        <br />
        <hr />
        <br />
        <p className="text-center font-bold text-sm font-lotus-eden">Resources</p>
        <ul>
            <li>
                <p className="text-xs indent-8 leading-6">
                    Gardiner, L. (January 14, 2005). <i>Sea Turtles</i>. New Georgia Encyclopedia.
                    Retrieved from: <a href="https://www.georgiaencyclopedia.org/articles/geography-environment/sea-turtles/">https://www.georgiaencyclopedia.org/articles/geography-environment/sea-turtles/</a>
                </p>
                <br />
                <p className="text-xs indent-8 leading-6">
                    Golden Isles. (2024). <i>Sea Turtle Facts & Information</i>. Golden Isles.
                    Retrieved from: <a href="https://www.goldenisles.com/things-to-do/activities/wildlife-nature/sea-turtles/">https://www.goldenisles.com/things-to-do/activities/wildlife-nature/sea-turtles/</a>
                </p>
            </li>
        </ul>
    </PageTemplate>
);