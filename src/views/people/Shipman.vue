<style lang="scss" scoped>
    @import 'styles.scss';
</style>

<template>
    <div>
        <div class="paper__title">
            <div>{{ names[0] }}\</div>
            <div>\{{ names[1] }}</div>
        </div>
        <div class="paper paper--article">
            <div class="paper__half">
<img src="../../assets/images/heroes/shipman.png">
            </div>
            <div class="paper__half">
<p>Nell Shipman (October 25, 1892 – January 23, 1970) was a Canadian actress, author and screenwriter, producer, director, and animal trainer. She was a Canadian pioneer in early Hollywood. She is best known for her work in James Oliver Curwood stories and for portraying strong, adventurous women. In 1919, she and her producer husband, Ernest Shipman,  made the most successful silent film in Canadian history, Back to God’s Country in which she did one of the first on-screen nude scenes.</p>
<p><b>Life and career</b><br>
Nell Shipman was born Helen Foster-Barham in Victoria, British Columbia. Her family moved to Seattle, Washington when she was 13 years old. Nell started stage acting and joined theatrical stock companies before working in film. From an early age, she developed a respect toward animals and later fought for animal rights in Hollywood speaking out against animal cruelty. She rescued as many as she could accommodate and ultimately ended up with her own zoo containing over 200 animals of all sorts.  When Nell was 18 years old, she met and married 39 year old theatrical impresario, Ernest Shipman (December 17, 1871 – August 7, 1931).
After marrying, Ernest and Nell moved to Hollywood to start working in the film industry. During this time, Nell sold the rights of her book, Under the Crescent Moon to Universal Studios (they wanted to make a six film serial of the story). Nell also started acting in Universal, Selig & Vitagraph productions. Between 1915–1918, she played several leading roles including her big debut film God’s Country and the Woman (1915). Nell directed, produced, and acted in the film that was based on a James Oliver Curwood short story. She was one of the first directors to shoot her films almost entirely on location. 
In 1918, Nell Shipman suffered from Spanish influenza and nearly died. She also lost all of her beautiful thick long hair and was forced to wear a wig. Fortunately her distinctive locks grew back.  During her recovery, she decided to create a production company called “Shipman-Curwood Producing Company”. Through the efforts of Ernest Shipman, who convinced a consortium of Calgary businessmen to invest in the potential of Alberta becoming a major film location destination, a company, Canadian Photoplays Ltd., was incorporated on February 7, 1919, with a $250,000 investment. The first and only film the company would produce was based on another Curwood story, “Wapi the Walrus” and adapted to the screen by Nell herself. The name was changed to Back to God’s Country for no other reason than to capitalize on Nell’s success in God’s Country and the Woman. 
The 73-minute film (at 18 frames per second) was shot in Los Angeles, San Francisco and on location near Lesser Slave Lake, Alberta, Canada by director, David M. Hartford. The cameramen were Dal Clawson and Joseph B. Walker, who later gained fame as Hollywood director, Frank Capra’s main cinematographer.  “Back To God’s Country” was a major Canadian and international silent film hit. Nell also played the lead in the film which featured a controversial though very brief nude scene. One of the promotional advertisements for the film had a line drawing of a nude Nell from the back frolicking with several animals. Part of the caption read: “Don’t book Back To God’s Country unless you want to prove the Nude is NOT Rude.” 
Although the movie was extremely successful and brought in a 300% profit, no further investments were forthcoming. As well, Curwood was infuriated with Nell because she changed the scenario of his short story. She adapted the protagonist of the film from the Great Dane, Wapi to the female lead, Delores. Shipman also shaped her character into a heroine: she saved the male lead and in so doing created an independent character and feminist role model. 
After shooting Back to God’s Country, Nell and co-star Bert Van Tuyle, with whom she was having an affair, moved back to Hollywood where she subsequently divorced Ernest Shipman.  During this period, Nell created “Nell Shipman Productions” with Van Tuyle and established herself as an independent producer. She focused on the major themes she enjoyed: wild animals, nature, feminist heroes, and filming on location. She produced, wrote, co-directed and starred in The Girl From God’s Country (1921) and The Grub Stake (1923). Both films were successful. 
While living in Spokane, Washington, Nell Shipman made a film called The Grub Stake, which costs around $180,000 to produce. Unfortunately, the film was never distributed. The American distributor went bankrupt and during subsequent litigation, the film became tied up in the legal proceedings. During this time, Nell tried to maintain her production company and after transporting her entire zoo on barges up to Priest Lake, Idaho, she made several short films at Lion Head Lodge. Unfortunately, life was difficult as Van Tuyle became increasingly unstable and by hostile locals who killed her animals.  In a scenario reminiscent of one of her films, Nell and Bert got lost in the wild for two days during a violent snow storm in early 1924. However, they managed to escape death when they were saved by two brothers, Joseph and Fred Gumaer. 
Later that same year, Nell ‘s company went bankrupt and she broke up with Van Tuyle.  She was forced to send her animals to the San Diego Zoo because of her inability to pay the maintenance costs. Nell next moved across the country and traveled the world. Eventually, she started writing scripts and short stories. The most notable contribution at this time was the story which became the basis of Wings in the Dark starring Myrna Loy and Cary Grant (1934). Nell finally moved to the California desert and continued writing there for the rest of her life. For the remainder of their respective careers, neither Nell nor Ernest had been able to duplicate the success of Back to God’s Country. Ernest died at the age of 53 due to cirrhosis of the liver. Their son, Barry was an actor and a singer. He married actress, Beulah McDonald, in 1934 and went on to have a successful career as a writer for movies serials, television and feature films. 
Nell Shipman’s Nell’s last major project was her autobiography, The Silent Screen and My Talking Heart, published posthumously by Boise State University through their Hemingway Western Studies Series. The university also houses the Nell Shipman Collection at Albertsons Library. Many of her films were preserved and are available through the library. Nell died at Cabazon, California at the age of 77.</p>
<p><b>Cultural legacy</b><br>
Nell Shipman lived for three years in what is known today as The Doctor’s House Museum in Glendale, California, from 1917 to 1920. She described it as on a “tree lined dirt road, away from the hub bub of Hollywood”. It was here that her mother died of the flu epidemic.
The Canadian playwright Sharon Pollock was commissioned to write a one-act play about Shipman’s life. It was performed in 1999 by the Theatre Junction Resident Company of Artists in Calgary, and was directed by Brian Richmond.
All of Nell Shipman’s surviving films are available on DVD from Boise State University.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Heroes from '../../heroes.js'

    export default { data() { 
        return { names: Heroes.filter(h => h.id === 'shipman')[0].names } 
    } }
</script>