var counter = 0;
for (var loop = 0; loop < 5; loop++) {
    if (loop == 3)
        continue;
    counter++;
    console.log(counter);
}
