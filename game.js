var game = null;
var s = Phaser.ScaleManager.SHOW_ALL;
function init()
{
	game = new Phaser.Game(800, 600, Phaser.CANVAS, '', null, false, false);

	game.state.add("MainGame", MainGame);
	game.state.start("MainGame");
}

var MainGame = function()
{

}

MainGame.prototype = 
{
	init: function(argument) 
	{

	},

	preload: function() 
	{
		game.load.image("Player", "http://192.168.178.43:7799/img/Player.png");
	},
	
		
	create: function() 
	{
		this.scale.scaleMode = s;
		console.log("loaded");
		this.player = game.add.sprite(5, 465, "Player");
		//this.btnUP = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.btnLEFT = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.btnRIGHT = game.input.keyboard.addKey(Phaser.Keyboard.D);
		this.RIGHTbtn = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.LEFTbtn = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);

	}, 



	update: function() 
	{
		


		//if(this.btnUP.isDown && this.player.body.touching.down && hitPlatform) this.player.body.velocity.y = -350;
		if(this.btnLEFT.isDown || this.LEFTbtn.isDown) this.player.x = this.player.x - 1;
		if(this.btnRIGHT.isDown || this.RIGHTbtn.isDown) this.player.x = this.player.x + 1;
	},


}