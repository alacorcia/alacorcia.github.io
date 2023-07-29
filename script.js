function flip_cover() {
    if (document.getElementById('cover-display').getAttribute('src') == 'orienteering.png') {
        document.getElementById('cover-display').setAttribute('src','orienteering-back.png')
    } else {
        document.getElementById('cover-display').setAttribute('src','orienteering.png')
    }
}

function flip_cover_front() {
    document.getElementById('cover-display').setAttribute('src','orienteering.png')
    document.getElementById('flip-cover-front').setAttribute('class','button-behave-off')
    document.getElementById('flip-cover-back').setAttribute('class','button-behave-on')
}


function flip_cover_back() {
    document.getElementById('cover-display').setAttribute('src','orienteering-back.png')
    document.getElementById('flip-cover-front').setAttribute('class','button-behave-on')
    document.getElementById('flip-cover-back').setAttribute('class','button-behave-off-purple')
}

function show_lyrics_1() {
    if (Math.floor(Math.random() * 2) == 0) {
        document.getElementById('show-lyrics-1').setAttribute('class','button-behave-off');
    } else {
        document.getElementById('show-lyrics-1').setAttribute('class','button-behave-off-purple');
    }
    //document.getElementById('show-lyrics-1').setAttribute('class','button-behave-off')
    document.getElementById('show-lyrics-2').setAttribute('class','button-behave-on')
    document.getElementById('show-lyrics-3').setAttribute('class','button-behave-on')
    document.getElementById('show-lyrics-4').setAttribute('class','button-behave-on')
    document.getElementById('show-lyrics-5').setAttribute('class','button-behave-on')

    document.getElementById('lyrics-display').innerHTML =


        '\
        Well then it started raining with no reason,<br>\
        frostbitten in the final season,<br>\
        and these ocean skies are falling and they wrap around my ankles.<br>\
        <br>\
        Wishing for a tailwind in a private jet,<br>\
        I only want what I don\'t have yet,<br>\
        and I hate it \'cause I know that I\'m more restless than I am thankful.<br>\
        <br>\
        And I never close my eyes, throw my eyesight everywhere.<br>\
        If you ever see me smile, check my teeth are all still there.<br>\
        <br>\
        Counting down the hours \'cause I don\'t need time,<br>\
        I\'m sketching shapes through the suburb street lines<br>\
        to retrace my steps in search of some companionship in distance.<br>\
        <br>\
        How is it that I feel the same indifference all my time\?<br>\
        <br>\
        And I find it hard to sleep \'cause I never close my eyes.<br>\
        If you ever see me cry, would you be at all surprised?<br>\
        '
}

function show_lyrics_2() {
    document.getElementById('show-lyrics-1').setAttribute('class','button-behave-on')
    if (Math.floor(Math.random() * 2) == 0) {
        document.getElementById('show-lyrics-2').setAttribute('class','button-behave-off');
    } else {
        document.getElementById('show-lyrics-2').setAttribute('class','button-behave-off-purple');
    }
    document.getElementById('show-lyrics-3').setAttribute('class','button-behave-on')
    document.getElementById('show-lyrics-4').setAttribute('class','button-behave-on')
    document.getElementById('show-lyrics-5').setAttribute('class','button-behave-on')

    document.getElementById('lyrics-display').innerHTML =


        '\
        Honey, you know that I\'ve always wanted to see<br>\
        the rising sun in the truest euphony<br>\
        of a Tuesday morning.<br>\
        <br>\
        Honey, if I ever look out of a window again<br>\
        please be sure that I\'ll feel the same way then<br>\
        as I do this morning.<br>\
        <br>\
        The city spins a song I\'ve often heard;<br>\
        it flies alongside this old hummingbird.<br>\
        <br>\
        The daylight hours start to turn away;<br>\
        the television stumbles through reruns of the 7pm news.<br>\
        It\'s 3-week-old interviews.<br>\
        <br>\
        I drove my car around in circles today<br>\
        in fear I\'d miss a turn and keep on straight without the chance to go back home;<br>\
        remind me not to drive alone.<br>\
        <br>\
        The CD spins a song I\'ve never heard;<br>\
        it flies alongside this old hummingbird.<br>\
        <br>\
        Honey, you know that I\'ve always wanted to see<br>\
        the clockwork sun in the bells and routine breeze<br>\
        of a Wednesday morning.<br>\
        <br>\
        Well, honey, now that I\'ve seen it, there\'s not much left to tell;<br>\
        it feels the same as those memories Tuesday held,<br>\
        but I know I\'m waking up this time again.<br>\
        I hope I\'ll see you when tomorrow ends.<br>\
        '
}

function show_lyrics_3() {
    document.getElementById('show-lyrics-1').setAttribute('class','button-behave-on')
    document.getElementById('show-lyrics-2').setAttribute('class','button-behave-on')
    if (Math.floor(Math.random() * 2) == 0) {
        document.getElementById('show-lyrics-3').setAttribute('class','button-behave-off');
    } else {
        document.getElementById('show-lyrics-3').setAttribute('class','button-behave-off-purple');
    }
    document.getElementById('show-lyrics-4').setAttribute('class','button-behave-on')
    document.getElementById('show-lyrics-5').setAttribute('class','button-behave-on')

    document.getElementById('lyrics-display').innerHTML =

    '\
    It\'s unusually warm for a day that I put on my trousers I usually only wear when the weather should call.<br>\
    <br>\
    I share you my hand in a voice not my own and you share with me yours in a voice that usually isn\'t this warm.<br>\
    <br>\
    My soft, erratic mind bleeds out my headphones.<br>\
    Here, it\'s mine, it\'s yours now.<br>\
    You hear it as you walk past.<br>\
    <br>\
    I can\'t hear myself think but the more that I think makes the less that feels real so I guess that I just won\'t be thinking again.<br>\
    I\'ll believe anything I hear then.<br>\
    <br>\
    Now I\'m looking for something, forgot where I put it, forgot what it looks like or who, if anyone, has seen it before.<br>\
    I don\'t care where it is anymore.<br>\
    <br>\
    My operatic mind thumps out my stereo.<br>\
    Here, it\'s mine, it\'s yours now.<br>\
    You hear it as you drive past.<br>\
    '

}

function show_lyrics_4() {
    document.getElementById('show-lyrics-1').setAttribute('class','button-behave-on')
    document.getElementById('show-lyrics-2').setAttribute('class','button-behave-on')
    document.getElementById('show-lyrics-3').setAttribute('class','button-behave-on')
    if (Math.floor(Math.random() * 2) == 0) {
        document.getElementById('show-lyrics-4').setAttribute('class','button-behave-off');
    } else {
        document.getElementById('show-lyrics-4').setAttribute('class','button-behave-off-purple');
    }
    document.getElementById('show-lyrics-5').setAttribute('class','button-behave-on')

    document.getElementById('lyrics-display').innerHTML =

    '\
    A lady in a bakery I saw this morningtime<br>\
    and I saw that she had no need nor aspiration to be more.<br>\
    <br>\
    A pigeon at a bus stop I saw was mid-commute;<br>\
    his breakfast halfway gone, torn and thrown but freshly baked shortly before.<br>\
    <br>\
    She\'s just a stranger on a long list of strangers<br>\
    to those passing by down her street.<br>\
    But she\'s happy just to see the working birds happy, because<br>\
    how could they eat<br>\
    if not for the bakery?<br>\
    <br>\
    A painting hooked askew hangs on a wall deep in her mind;<br>\
    a hallway lined with dreams, it sprawls for years but splits a house which has no rooms.<br>\
    <br>\
    The bird tries to detach himself from all of his profound affairs;<br>\
    A life lived in the skies counts for more than flying carefree through the air.<br>\
    <br>\
    He\'s just a stranger on a long list of strangers<br>\
    to those flying by down his street.<br>\
    But he\'s happy just to see the working birds happy, because<br>\
    how could she eat<br>\
    if not for the bakery?<br>\
    <br>\
    Well, she draws a ballpoint curtain on a day that seems so<br>\
    unremarkable to the bird who finds a pen to do the same.<br>\
    But what has he to show for his?<br>\
    A winless game.<br>\
    '

}

function show_lyrics_5() {
    document.getElementById('show-lyrics-1').setAttribute('class','button-behave-on')
    document.getElementById('show-lyrics-2').setAttribute('class','button-behave-on')
    document.getElementById('show-lyrics-3').setAttribute('class','button-behave-on')
    document.getElementById('show-lyrics-4').setAttribute('class','button-behave-on')
    if (Math.floor(Math.random() * 2) == 0) {
        document.getElementById('show-lyrics-5').setAttribute('class','button-behave-off');
    } else {
        document.getElementById('show-lyrics-5').setAttribute('class','button-behave-off-purple');
    }

    document.getElementById('lyrics-display').innerHTML =

    '\
    The vitiligo sky clouds my process of thought as I try to choose my life\'s one profession.<br>\
    The more I try, the more I realise I\'d love to leave this desk and sing guitar-backed confessions.<br>\
    <br>\
    A life on the plains - a patchwork paddock rolls beneath my sunburnt shack, it could be very endearing.<br>\
    I can\'t explain what I\'d find in the carpet streets that line the park while I\'m off orienteering.<br>\
    <br>\
    If I had 4 hands, I\'d count on all my fingers all the years I\'ve spent in training for this hung indecision.<br>\
    But in searching for a picture in which I look even slightly photogenic I found there\'s no such thing as underthinking,<br>\
    at least not for me.<br>\
    <br>\
    I could fly planes, if I overcame my fears of cramped rooms and wide-open clearings.<br>\
    If all else fails, at least I\'ll know my lack of direction rules out orienteering.<br>\
    '

}
