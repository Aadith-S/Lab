for(let i = 0;i<10;i++){
    for(let j = 0;j<=i;j++){
        process.stdout.write(String(j+1));
        process.stdout.write(" ");
    }
    console.log();
}