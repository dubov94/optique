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
<img src="../../assets/images/heroes/weixler.png">
            </div>
            <div class="paper__half">
<p>Dorrit Weixler (27 March 1892 – 30 November 1916) was a German film actress of the early 20th century who is best recalled for her comedic roles in German films from the World War I era.</p>
<p><b>Career</b><br>
The elder sister of actress Grete Weixler, Dorrit Weixler first appeared in silent film shorts for director Alwin Neuß (1879–1935) in 1911. In 1913 she began a successful collaboration with film director Franz Hofer at Luna Film. Hofer began casting Weixler in a number of comedies presenting her as a comedic, temperamental, independent-minded but endearing teenager, often replete in her soon-to-be signature sailor outfit. She often appeared opposite popular German actor and director Ernst Lubitsch and matinee idol Bruno Kastner in her early films with Hofer.[4] Weixler made approximately eleven films with Hofer, and her role as a brassy teen became popular with German filmgoers.
In 1915 she moved to Oliver Film, but her image was not tampered with significantly. A number of “Dorrit” films were released from 1915 to 1916 which followed her adventures, such as: Dorrit’s Chauffeur (1915), Dorrits Eheglück (English: Dorrit’s Marital Bliss) (1916) and Dorrit bekommt ‘ne Lebensstellung (Dorrit Gets a Job for Life) (1916) for directors such as Paul Otto and Paul Heidemann.</p>
<p><b>Death</b><br>
During the end of May 1916, Weixler was at a theater in Nollendorfplatz as part of a “Dorrit Weixler Week”, which was a promotional campaign for the actress. It was Weixler’s first time performing on stage. The audience at the theater was full and Weixler was to entertain the crowd with comedic sketches and dancing. During a dance routine, Weixler collapsed on stage and the show had to be closed. Various speculations were cast by the press for her ailment, including stress or a neurological disorder. The filming of a new movie had to be aborted because of her poor health after her collapse. Later that year Weixler was given morphine, to which she became addicted. She was placed in a sanatorium in Berlin for rest and recovery. On 30 November 1916, aged 24, she committed suicide by hanging herself. She was buried at the Südwestkirchhof cemetery in Stahnsdorf in December of that year. In 1921, five years after her death, Dorittchens Vergnügungsreise (Dorritchen’s Pleasure Cruise) was released to the German public. Filmed in 1916, the film was directed by Paul Heidemann, and Weixler appeared opposite actors Bruno Kastner and Kurt Busch.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Heroes from '../../heroes.js'

    export default { data() { 
        return { names: Heroes.filter(h => h.id === 'weixler')[0].names } 
    } }
</script>