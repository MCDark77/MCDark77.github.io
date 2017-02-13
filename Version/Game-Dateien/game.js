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
		game.load.image('sky', 'http://192.168.178.43:7799/img/sky.png');
    	game.load.image('block', 'http://192.168.178.43:7799/img/block.png');
		game.load.image("Player", "http://192.168.178.43:7799/img/Player.png");
	},
	
		
	create: function() 
	{
		var platforms;
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.platforms = game.add.group();
		this.platforms.enableBody = true;
		var platform = this.platforms.create(0, game.world.height - 64, 'block');
		platform.scale.setTo(2, 2);
		platform.body.immovable = true;
		var ledge = this.platforms.create(400, 400, 'block');
		this.scale.scaleMode = s;
		console.log("loaded");
		game.add.sprite(0, 0, 'sky');
		game.add.sprite('block');
		this.player = game.add.sprite(5, 465, "Player");
		game.physics.arcade.enable(this.player);
		this.player.body.bounce.y = 0.2;
    	this.player.body.gravity.y = 300;
    	this.player.body.collideWorldBounds = true;
		this.btnUP = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.btnLEFT = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.btnRIGHT = game.input.keyboard.addKey(Phaser.Keyboard.D);
		this.RIGHTbtn = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.LEFTbtn = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.DPAD_LEFT = Phaser.Gamepad.XBOX360_DPAD_LEFT;
		this.DPAD_RIGHT = Phaser.Gamepad.XBOX360_DPAD_RIGHT;
		ledge.body.immovable = true;
    	ledge = this.platforms.create(-150, 250, 'block');
    	ledge.body.immovable = true;

	}, 



	update: function() 
	{
		

		var hitPlatform = game.physics.arcade.collide(this.player, this.platforms);
		if(this.btnUP.isDown && this.player.body.touching.down && hitPlatform) this.player.body.velocity.y = -350;
		if(this.btnLEFT.isDown || this.LEFTbtn.isDown) this.player.x = this.player.x - 1;
		if(this.btnRIGHT.isDown || this.RIGHTbtn.isDown) this.player.x = this.player.x + 1;
	},


}