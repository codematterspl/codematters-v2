<template>
    <div class="contact">
        <h2 class="header">Chcesz dowiedzieć się więcej?<br />Napisz do nas!</h2>
        <form class="form">
            <input class="input" type="text" name="name" placeholder="Imię" />
            <input class="input" type="email" name="name" placeholder="E-mail*" />
            <textarea class="textarea" placeholder="Treść wiadomości*"></textarea>
            <span class="mandatory-label">* - pola obowiązkowe</span>
            <button class="button">Wyślij wiadomość</button>
        </form>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.contact {
    @include page-paddings();
    padding-top: 32px;
    text-align: center;

    .header {
        text-transform: uppercase;
        margin-bottom: 16px;
    }

    .form {
        display: flex;
        flex-direction: column;

        .input {
            height: 64px;
            border: 1px solid #939598;
            border-radius: 5px;
            padding: 0 16px;
            font-size: 12px;
            color: #939598;
            outline: none;
            margin-bottom: 16px;
        }

        .textarea {
            min-height: 128px;
            border: 1px solid #939598;
            border-radius: 5px;
            padding: 16px;
            font-size: 12px;
            color: #939598;
            outline: none;
            margin-bottom: 16px;
        }

        .button {
            background-color: #662D91;
            height: 56px;
            width: 100%;
            border-radius: 20px;
            font-size: 16px;
            color: #fff;
            margin-top: 24px;

            @include breakpoint($md) {
                width: 420px;
            }

            @include breakpoint($lg) {
                width: 272px;
            }
        }

        .mandatory-label {
            color: #939598;
            font-size: 12px;
            text-align: left;
        }
    }
}
</style>
