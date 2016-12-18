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
<img src="../../assets/images/heroes/stonehouse.png">
            </div>
            <div class="paper__half">
<p>Ruth Stonehouse (September 28, 1892 – May 12, 1941) was an actress and film director during the silent film era. Her stage career started at the age of eight as a dancer in Arizona shows.</p>
<p><b>Early life and career</b><br>
Ruth Stonehouse was born to James Wesley Stonehouse (1869–1958) and Georgia C. Worster on September 28, 1892 in Denver, Colorado. Her father was the founder of Stonehouse Signs Inc.  According to the 1900 Census for Laurence Town, Teller County, Colorado, she lived with her father, James, a sign writer, and her grandmother, Eda Stonehouse, along with her sister, Hazel, who was a year younger. By 1910, she was living with her mother, Georgia Stonehouse, a stenographer, and her sister, Hazel, in Chicago, Illinois. Curiously, her mother lists herself as a widow on the 1910 Census, when James Stonehouse can be found residing in Arizona. Her parents were divorced around 1902. Before her film career, she was a reporter for a Chicago, Illinois newspaper, and contributed short stories to magazines. 
She worked for Triangle Film Corporation and Universal Pictures during a career which extended from 1911 until 1928. A few years prior in 1907, she was a founding member of Essanay Film Manufacturing Company. Having experience here help her begin her directing career later on as she moved to different stations.  Her androgynous appearance was most apparent in the role of Nancy Glenn and in the 1917 motion picture, The Edge of the Law. She performed in comedies and dramas such as the patriotic film Doing Her Bit (1917), which was directed by Jack Conway. 
In 1917, Stonehouse directed the films Daredevil Dan, A Walloping Time, The Winning Pair, A Limb of Satan, Puppy Love  and Tacky Sue’s Romance. These movies were one-reel orphan asylum pictures, the first of which was entitled Mary Ann.</p>
<p><b>Personal life and death</b><br>
Ruth owned a cabin in Santa Anita Canyon in the Sierra Madre Mountains. Here she entertained men and women of prominence in the film world, cooking culinary masterpieces which her friends deemed superior to most chefs. Stonehouse was a fan of the Owen Magnetic Auto and promoted it in newspapers. Stonehouse was an avid gardener who grew fibrous-rooted begonias, pleromas, fuchsias, cinerias, and hyacinths. Her home, located at 204 North Rossmore Avenue in Los Angeles, California, was an adaptation of a Spanish design that was situated well to the front of a large lot. She was an active worker in the Children’s Home Society for twenty-five years and also a member of the Garden Club of California.
Ruth Stonehouse died in Hollywood, California of a cerebral hemorrhage on May 12, 1941, at the age of 48. She was listed as Mrs. Felix Hughes in her obituary. Her funeral services were conducted from Wee Kirk o’ the Heather. She was interred in a mausoleum at Forest Lawn Memorial Park.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Heroes from '../../heroes.js'

    export default { data() { 
        return { names: Heroes.filter(h => h.id === 'stonehouse')[0].names } 
    } }
</script>