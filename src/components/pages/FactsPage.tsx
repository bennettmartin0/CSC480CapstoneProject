import { PageTemplate } from "./PageTemplate";

export const FactsPage = () => (
    <PageTemplate headerImageURI="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Baby_Chelonia_mydas_20060319.jpg/1155px-Baby_Chelonia_mydas_20060319.jpg?20060711230554" header="Sea Turtle Facts" showGauge={false}>
        <p className="text-sm my-4">Sea turtles are migratory marine reptiles whose ancestors have inhabited earth’s oceans since the late Triassic Period (about 205 million years before present). Nearly all species of sea turtle are now classified as endangered, with three of the seven existing species being critically endangered.</p>
        
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Loggerhead_sea_turtle.jpg/1200px-Loggerhead_sea_turtle.jpg?20100529013105"} className="w-[90%] m-[5%] mt-[10%] mb-[10px] rounded-md shadow-lg"/>
        <p className="text-sm my-4">Loggerhead, <i>Caretta Caretta</i>: Georgia’s most common nesting sea turtle; found in the Atlantic, Pacific, and Indian oceans and the Mediterranean Sea.</p>
        <br />
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Leatherback_sea_turtle_Tinglar%2C_USVI_%285839996547%29.jpg/1200px-Leatherback_sea_turtle_Tinglar%2C_USVI_%285839996547%29.jpg?20160816033925"} className="w-[90%] m-[5%] mt-[10%] mb-[10px] rounded-md shadow-lg"/>
        <p className="text-sm my-4">Leatherback, <i>Dermochelys Coriacea</i>: Global distribution, perhaps the most widely distributed reptile on the planet; tolerates colder waters. They are the largest of all sea turtles and can reach nearly six feet in length.</p>
        <br />
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Chelonia_Mydas_%28cropped%29.JPG/1200px-Chelonia_Mydas_%28cropped%29.JPG?20180307235014"} className="w-[90%] m-[5%] mt-[10%] mb-[10px] rounded-md shadow-lg"/>
        <p className="text-sm my-4">Green, <i>Chelonia Mydas</i>: Occasionally found in Georgia waters; found primarily in tropical zones of the Atlantic, Pacific, and Indian oceans.</p>
        <br />
        <img src={"https://upload.wikimedia.org/wikipedia/commons/e/eb/Hawksbill_sea_turtle_-_NOAA.jpg?20210128045033"} className="w-[90%] m-[5%] mt-[10%] mb-[10px] rounded-md shadow-lg"/>
        <p className="text-sm my-4">Hawksbill, <i>Eretmochelys Imbricata</i>: Found mostly in tropical waters of the Atlantic, Pacific, and Indian oceans; rarely sighted in Georgia, but two carcasses were found in 1998.</p>
        <br />
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/A_nesting_Kemp%27s_ridley_sea_turtle_returns_to_the_water_after_nesting_at_the_34.5_mile_marker_at_Padre_Island_National_Seashore_on_8_June_2011_%28f70ae6c6-bc62-4654-97be-f0060950efb7%29.jpg/1200px-thumbnail.jpg?20190630084443"} className="w-[90%] m-[5%] mt-[10%] mb-[10px] rounded-md shadow-lg"/>
        <p className="text-sm my-4">Kemp’s Ridley (<i>Lepidochelys Kempii</i>): Found primarily in the Gulf of Mexico, though juveniles are found in the Atlantic Ocean during warm months.</p>
        <br />
        
        <img src={"https://upload.wikimedia.org/wikipedia/commons/f/f2/Olive_ridley_sea_turtle_cropped.jpg?20190809011054"} className="w-[90%] m-[5%] mt-[10%] mb-[10px] rounded-md shadow-lg"/>
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