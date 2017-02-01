const {createTokenizer}=require("ksana-corpus/tokenizer");
const tokenizer=createTokenizer();

const diff=require("diff");

const aligntext=function(text1,text2,opts){
	opts=opts||{};

	const t1=tokenizer.tokenize(text1);
	const t2=tokenizer.tokenize(text2);

	const r=diff.diffChars(text1,text2);
	console.log(r)

}
module.exports={aligntext}