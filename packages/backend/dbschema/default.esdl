module default {
    type Person {
        required property name -> str;
    }

    type Movie {
        property title -> str;
        multi link actors -> Person;
    }
}
