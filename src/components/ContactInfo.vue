<template>
    <div class="contact-info">
        <h4>E-mail:</h4>
        <p>skotinganton@gmail.com</p>
        <h4>Telefon:</h4>
        <p>070 432 98 55</p>
        <h4>Adress:</h4>
        <p>Vädursgatan 7 Säffle, 66 133</p>
    </div>
</template>

<style>
.contact-info {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-rows: auto;
    gap: 1em .5em;
}

.contact-info * {
    margin: 0;
    text-align: start;
}
</style>