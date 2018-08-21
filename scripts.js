function exerciseOne(){
	let hash = "";
	while(hash.length < 8 ){
		hash = hash + "#";
		console.log(hash);
	}
}

function exerciseTwo(){
	let number = 1;
	while(number <= 100 ){
		if((number % 3 == 0) && !(number % 5 ==0)){
			console.log("Fizz")
		} else if ((number % 5 == 0) && !(number % 3 == 0)){
			console.log("Buzz")
		} else if ((number % 5 == 0) && (number % 3 == 0)) {
			console.log("FizzBuzz")
		} else {
			console.log(number);
		}
		number++;
	}
}

function exerciseThree(){
	let width = 0;
	let height = 0;
	let chessboard = "";
	let white = true;
	while(height < 8){
		while (width < 8){
			if(width == 0){
				if(height % 2 == 0){
					chessboard += " ";
					white = true;
				} else {
					chessboard += "#";
					white = false;
				}
			} else if(white){
				chessboard += "#";
				white = false;
			} else {
				chessboard += " ";
				white = true;
			}
			width++;
		}
		chessboard += "\n";
		width = 0;
		height++;
	}
	console.log(chessboard);
	console.log("FINISHED");
}