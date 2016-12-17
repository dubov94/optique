<style lang="scss" scoped>
    @import '../assets/global.scss';

    .paper {
        display: flex;
        margin-top: 50px;
        font-family: 'Din B';
        font-weight: 13pt;
        line-height: 15pt;

        &__half {
            width: 50%;
            padding: 10px;

            &:first-of-type {
                color: $color-black;
                a { color: $color-blue; }
            }

            &:last-of-type {
                color: $color-blue;
                a { color: $color-black; }
            }

            p {
                text-align: justify;

                &::before {
                    content: '\2022';
                }
            }
        }

        a {
            text-transform: uppercase;
            font-weight: bold;
        }
    }
</style>

<template>
    <div class="container--center">
        <div class="wrapper">
            <c-header :title="['События', 'Events']" :oq="true"></c-header>
            <div class="paper">
                <div class="paper__half">
                    <p>
                        Осуществлены последние изменения Кинетоскопа,
                        включая использование подъёмных механизмов и более 
                        широких экранов. Данные изменения фактически становятся
                        к 1909 году основной технической характеристикой всех немых фильмов.
                    </p>
                    <p>
                        Макс Складановский вносит усовершенствования в свою камеру и снимает
                        в этом году свой первый материал. Но его необычный способ построения
                        изображения не даёт ему продемонстрировать полученную картину до конца
                        1895 года, пока не будет завершена работа над возможностью его биоскопа 
                        проецировать изображения.
                    </p>
                    <p>
                        18 октября открытие фестиваля Théâtre Optique, в рамках которого в
                        Музее Гревен в Париже происходит демонстрация публике фильмов.
                    </p>
                </div>
                <div class="paper__half">
                    <p>
                        The final revisions to the Kinetoscope are made, including a vertical
                        transport and wider film. This becomes the de facto technical specification
                        for all silent film by 1909.
                    </p>
                    <p>
                        Max Skladanowsky develops a camera and shoots his first footage this year, but
                        its unusual interleaved image format leaves him ultimately unable to exhibit it
                        until work is completed on the Bioskop projector in late 1895.
                    </p>
                    <p>
                        18 October &mdash; Théâtre Optique event opens, showing projected motion pictures
                        to the public at the Musée Grévin in Paris.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'

    export default {
        components: {
            'c-header': Header
        }
    }
</script>
