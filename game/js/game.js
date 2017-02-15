var game = null;
//var s = Phaser.ScaleManager.SHOW_ALL;
var map;
var layer;
function init()
{
	game = new Phaser.Game(768, 432, Phaser.CANVAS, '', null, false, false);

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
		game.load.tilemap('test', 'http://192.168.178.43:7799/Map/test.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('dirt', 'http://192.168.178.43:7799/Map/Textures/Dirt.png');
		game.load.spritesheet('spl', 'http://192.168.178.43:7799/img/spritesheet/Player.png', 48, 64);
	},
	
		
	create: function() 
	{
		//this.scale.scaleMode = s;
		console.log("Loaded v1.0 of Game by MCDark77");
		this.btnUP = game.input.keyboard.addKey(Phaser.Keyboard.W);
		this.btnDOWN = game.input.keyboard.addKey(Phaser.Keyboard.S);
		this.btnLEFT = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.btnRIGHT = game.input.keyboard.addKey(Phaser.Keyboard.D);
		this.RIGHTbtn = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.LEFTbtn = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.UPbtn = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.DOWNbtn = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

		game.physics.startSystem(Phaser.Physics.ARCADE);


		game.stage.backgroundColor = '#787878';
		map = game.add.tilemap('test');
		map.addTilesetImage('Dirt', 'dirt');
    	layer = map.createLayer('Ebene');
    	layer.resizeWorld();
    	game.world.setBounds(0, 0, 1920, 1920);

    	this.player = game.add.sprite(5, 300, "spl");
    	game.camera.follow(this.player);
    	game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.player.animations.add('forward' [0, 1, 2, 3]);
		this.player.animations.add('backward' [4, 5, 6]);

	}, 



	update: function() 
	{
		


		if(this.btnUP.isDown || this.UPbtn.isDown)	this.player.y = this.player.y -2,5;
		if(this.btnDOWN.isDown || this.DOWNbtn.isDown)	this.player.y = this.player.y +2,5;
		if(this.btnLEFT.isDown || this.LEFTbtn.isDown) this.player.x = this.player.x - 2,5 && this.player.animations.play('backward', 10, true);
		if(this.btnRIGHT.isDown || this.RIGHTbtn.isDown) this.player.x = this.player.x + 2,5 && this.player.animations.play('forward', 10, true);
	},

	/*render: function() 
	*{

    *game.debug.cameraInfo(game.camera, 32, 32);
    *game.debug.spriteCoords(this.player, 32, 500);

	},*/


}