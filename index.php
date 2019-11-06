<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css" />
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    
</head>

<body>
    <div id="wrapper">
        <ul>
            <li><button @click="turnA">Home</a></li>
            <li><button @click="turnB">About</a></li>
            <li><button @click="turnC">News</a></li>
            <li><button @click="turnD">Contact</a></li>
        </ul>

        <div id="content">
            <transition name="component-fade" mode="out-in" >
                <component v-bind:is="view"></component>
            </transition>
        </div>

    </div>
    <script src="app.js"></script>
</body>

</html>