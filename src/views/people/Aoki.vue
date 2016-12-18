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
<img src="../../assets/images/heroes/aoki.png">
            </div>
            <div class="paper__half">
<p><b>Tsuru Aoki</b> (September 9, 1892 – October 18, 1961) was a popular Japanese stage and screen actress whose career was most prolific during the silent film era of the 1910s through the 1920s. Aoki may have been the first Asian actress to garner top-billing in American motion pictures.</p>
<p><b>Life and career</b><br>
Born in Tokyo, Japan, Aoki emigrated to Los Angeles, California in 1903 with her aunt and uncle, Otojirō Kawakami, who had previously owned a theatrical group called “Kawakami-za” in Japan. Aoki was later adopted by another uncle Aoki Toshio and relocated to San Francisco. Toshio worked as a sketch artist for a local newspaper. Tsuru Aoki started taking lessons in ballet dance in New York, when she went along with her uncle Toshio, who was hired by David Belasco for The Darling of the Gods. After Toshio’s death a reporter looked after Aoki.  Aoki began her acting career after returning to Los Angeles and performing in stage productions in the city’s Japanese Theatre where she was noticed by film producer Thomas Ince who placed the young actress under contract. She was also responsible for recruiting Japanese actors for Imperial Japanese Company, a subsidiary of New York Motion Picture Corporation.  Aoki made her film debut in the Majestic film studios release The Oath of Tsuru San in 1913 opposite actor William Garwood. Her follow-up film was the 1914 Ince produced O Mimi San, which starred the American child actress Mildred Harris and a handsome young newcomer named Sessue Hayakawa, whom Aoki had acted with onstage at the Japanese Theatre the previous year. The couple began a romantic relationship that would culminate in their marriage on May 1, 1914, just weeks before the release of their critically acclaimed and publicly successful film The Wrath of the Gods – a melodrama about an interracial romance between a man portrayed by Caucasian actor/director Frank Borzage and an Asian woman portrayed by Aoki. The film also starred Sessue Hayakawa and featured actress Gladys Brockwell. Hayakawa and Aoki would eventually make more than twenty films together throughout the 1910s and 1920s.
One of Aoki’s most recalled films of the silent period is the 1919 William Worthington-directed The Dragon Painter, in which Aoki starred, playing a young woman who convinces an isolated, mentally deranged artist named Tatsu (portrayed by Hayakawa) to come down from the mountains so that she may civilize him and he may further his artistic abilities. Other notable films of the period were The Typhoon (1914), The Vigil (1914), The Geisha (1914), The Chinatown Mystery (1915), His Birthright (1918), and The Breath of the Gods (1920). Throughout the 1910s, Aoki would appear in approximately forty films, often in leading-lady roles which was a first for an Asian actress. Some of her co-stars of the era included such notable names as Marin Sais, Frank Borzage, Gladys Brockwell, Mildred Harris, Jack Holt, Jane Wolfe, Dagmar Godowsky, Vola Vale, Florence Vidor, Earle Foxe, and Walter Long. After a series of moderately successful Ince-produced two-reel serials, Aoki’s career in the United States began to falter (while her husband’s career began to build momentum), and the couple travelled to France in 1923 and filmed the popular Édouard-Émile Violet-directed drama La Bataille. After returning to America, however, Aoki made only three more films before retiring from the screen to raise her and Hayakawa’s three adopted children. Her last silent screen performance was the 1924 release The Danger Line. Aoki would only return to the screen in 1960 (her first talkie) to once again appear with her husband in the drama Hell to Eternity. She died the following year in Japan of acute peritonitis at the age of 69.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Heroes from '../../heroes.js'

    export default { data() { 
        return { names: Heroes.filter(h => h.id === 'aoki')[0].names } 
    } }
</script>