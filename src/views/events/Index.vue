<style lang="scss" scoped>
    @import 'styles.scss';

    .paper--list {
        .paper__half {
            p {
                &::before {
                    content: '\2022';
                    font-size: 3em;
                }
            }
        }
    }
</style>

<template>
    <div class="paper paper--list">
        <div class="paper__half">
            <p>
                Осуществлены последние изменения <router-link to="/events/kinetoscope/ru">Кинетоскопа</router-link>,
                включая использование подъёмных механизмов и более 
                широких экранов. Данные изменения фактически становятся
                к 1909 году основной технической характеристикой всех немых фильмов.
            </p>
            <p>
                &nbsp;<router-link to="/events/skladanowsky/ru">Макс Складановский</router-link> вносит усовер&shy;шенствования в свою камеру и снимает
                в этом году свой первый материал. Но его необычный способ построения
                изображения не даёт ему продемонстрировать полученную картину до конца
                1895 года, пока не будет завершена работа над возможностью его биоскопа 
                проецировать изображения.
            </p>
            <p>
                18 октября открытие фестиваля <router-link to="/events/theatre/ru">Théâtre Optique</router-link>, в рамках которого в
                Музее Гревен в Париже происходит демонстрация публике фильмов.
            </p>
        </div>
        <div class="paper__half">
            <p>
                The final revisions to the <router-link to="/events/kinetoscope/en">Kinetoscope</router-link> are made, including a vertical
                transport and wider film. This becomes the de facto technical specification
                for all silent film by 1909.
            </p>
            <p>
                &nbsp;<router-link to="/events/skladanowsky/en">Max Skladanowsky</router-link> develops a camera and shoots his first footage this year, but
                its unusual interleaved image format leaves him ultimately unable to exhibit it
                until work is completed on the Bioskop projector in late 1895.
            </p>
            <p>
                18 October &mdash; <router-link to="/events/theatre/en">Théâtre Optique</router-link> event opens, showing projected motion pictures
                to the public at the Musée Grévin in Paris.
            </p>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
