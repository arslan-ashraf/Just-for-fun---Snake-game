let x_velocity = 0
let y_velocity = 0
let x_player_position = 10
let y_player_position = 10
let grid_size = 20
let tile_count = 20
let x_eat_object = 15
let y_eat_object = 15
let initial_size = 5 
let trail = []
let canvas;
let get_context;
	
window.onload = function(){
	canvas = document.querySelector('.snakeboard')
	get_context = canvas.getContext('2d')
	document.addEventListener('keydown', key_pushed)
	setInterval(play_game, 1000/15)
}
	
function play_game(){
	x_player_position += x_velocity
	y_player_position += y_velocity
	if (x_player_position < 0){
		x_player_position = tile_count - 1
	}
	if (x_player_position > tile_count - 1){
		x_player_position = 0 
	}
	if (y_player_position < 0){
		y_player_position = tile_count - 1
	}
	if (y_player_position > tile_count - 1){
		y_player_position = 0 
	}
	get_context.fillStyle  = 'black'
	get_context.fillRect(0, 0, canvas.width, canvas.height)

	get_context.fillStyle  = 'green'
	
	for(let i = 0; i < trail.length; i++){
		get_context.fillRect(trail[i].x * grid_size, 
							 trail[i].y * grid_size, 
							 grid_size - 2, 
							 grid_size - 2)
		if (trail[i].x == x_player_position && trail[i].y == y_player_position){
			initial_size = 5
		}

	trail.push({ 'x' : x_player_position, 'y': y_player_position})

	while(trail.length > initial_size){
		trail.shift()
	}
	
	if (x_eat_object == x_player_position && y_eat_object == y_player_position){
			initial_size += 1 
			x_eat_object = Math.floor(Math.random() * tile_count)
			y_eat_object = Math.floor(Math.random() * tile_count)
		}
	}
	
	get_context.fillStyle  = 'red'
	get_context.fillRect(x_eat_object * grid_size, 
						 y_eat_object * grid_size,
						 grid_size - 2,
						 grid_size - 2)
}

function key_pushed(event){
	if (event.keyCode == 37){
		x_velocity = -1; y_velocity = 0
	}	else if (event.keyCode == 38){
		x_velocity = 0; y_velocity = -1
	}	else if (event.keyCode){
		x_velocity = 1; y_velocity = 0
	}	else if (event.keyCode == 39){
		x_velocity = 0; y_velocity = 1
	}	else if (event.keyCode == 40){
		
	}
}