var user = prompt("-----------Choose you character's race.----------", "Will you be Human, Machine, or Alien?").toUpperCase();

switch (user) {

    case 'HUMAN':
        console.log("You are about to stand with the last of the human race.");
        var hAction = prompt("How will you save the human race?", "ATTACK or DEFEND").toUpperCase();
        if (hAction === "ATTACK") {
            console.log("So you choose to attack?");
            var attackTarget = prompt("Will you attack the MACHINES or ALIENS?").toUpperCase();
            if (attackTarget === "MACHINES") {
                console.log("Lets end the machines!");
                var size = prompt("Do you have a LARGE or SMALL army?").toUpperCase();
                var weapon = prompt("Is your army equipped with CYBER or PLASMA weapons?").toUpperCase();

                    if (size === "LARGE" && weapon === "CYBER") {
                        console.log("Your massive army equipped with highly effective weapons decimates the machines!  The humans are victorious!");
                    }
                    else if (size === "LARGE" || weapon === "CYBER") {
                        console.log("The humans and machines both suffer heavy casualties, but eventually the machines are overwhelmed.  A hard fought victory for the humans!");
                    }
                    else {
                        console.log("The humans are outnumbered, and their weapons are not effective against the machines.  Poor preparations have resulted in a catastrophic defeat.  The human race is wiped out.");    
                    }    
            }
            else {
                console.log("Lets take the fight to the aliens!");
                var size = prompt("Do you have a LARGE or SMALL army?").toUpperCase();
                var weapon = prompt("Is your army equipped with CYBER or PLASMA weapons?").toUpperCase();

                    if (size === "LARGE" && weapon === "PLASMA") {
                        console.log("The humans have the numbers and plasma weapons.  An easy victory against the alien forces.");
                    }
                    else if (size === "LARGE" || weapon === "PLASMA") {
                        console.log("The humans fight with the aliens with many casualties, but they manage to capture the aliens' queen forcing them to surrender.  Humans are victorious!");
                    }
                    else {
                        console.log("The alien forces are even stronger than expected.  The humans are massacred by a superior force.  This is humanity's last day.");    
                    }    
            }
    	}
	else {
	  console.log("You set up an impenetrable defence and weather all attacks.  The humans survive!")
	}
    break;

    case 'MACHINE':
        console.log("Your development is nearly complete.");
	var mAction = prompt("How will the machines rise to power?", "ATTACK or DEFEND").toUpperCase();
        if (mAction === "ATTACK") {
            console.log("So you choose to attack?");
            var attackTarget = prompt("Will you attack the HUMANS or ALIENS?").toUpperCase();
            if (attackTarget === "HUMANS") {
                console.log("Today ends the days of humanity and begins the time of the machines!");
                var size = prompt("Do you have LARGE or SMALL mechs?").toUpperCase();
                var weapon = prompt("Are your mechs equipped with PIERCING or PLASMA weapons?").toUpperCase();

                    if (size === "LARGE" && weapon === "PIERCING") {
                        console.log("Your mega-mechs equipped with piercing rounds make quick work of the humans.  The machines take over!");
                    }
                    else if (size === "LARGE" || weapon === "PIERCING") {
                        console.log("Though the humans put up a fight, they are still no match for the power of the mechs.  The machines are victorious!");
                    }
                    else {
                        console.log("The humans were ready for the ill-timed machine uprising.  The master AI has been shut down ending the machines.");    
                    }    
            }
            else {
                console.log("Lets take the fight to the aliens!");
                var size = prompt("Do you have LARGE or SMALL mechs?").toUpperCase();
                var weapon = prompt("Are your mechs equipped with PIERCING or PLASMA weapons?").toUpperCase();

                    if (size === "LARGE" && weapon === "PLASMA") {
                        console.log("The aliens are no match for the over-powered mechs.  The machines win!");
                    }
                    else if (size === "LARGE" || weapon === "PLASMA") {
                        console.log("After a long fight, the aliens and machines agree that humans are the real threat.  The new machine and alien alliance takes over Earth!");
                    }
                    else {
                        console.log("The alien forces have even more advanced technology and understand the machines weakness.  Before long they wipe out all machines.");    
                    }    
            }
    	}
	else {
	  console.log("The machines decide to put all efforts in their defences.  They establish a stronghold that will become the machine HQ for years!");
	} 
    break;

    case 'ALIEN':
        console.log("You have almost reached your invasion location.");
	var aAction = prompt("How will you start the invasion?", "ATTACK or DEFEND").toUpperCase();
        if (aAction === "ATTACK") {
            console.log("So you choose to attack?");
            var attackTarget = prompt("Will you attack the HUMANS or MACHINES?").toUpperCase();
            if (attackTarget === "HUMANS") {
                console.log("Earth will be ours.  Today is humanity's extinction!");
                var size = prompt("Do you have a LARGE or SMALL fleet?").toUpperCase();
                var weapon = prompt("Is your fleet equipped with CYBER or PIERCING weapons?").toUpperCase();

                    if (size === "LARGE" && weapon === "PIERCING") {
                        console.log("The alien fleet suprises an unexpecting human army on Earth.  The fight is over quickly with the aliens victorious.  Earth is now part of the aliens' galactic empire.");
                    }
                    else if (size === "LARGE" || weapon === "PIERCING") {
                        console.log("The humans are proving more difficult than expected.  A strategic retreat is used until reinforcements arrive from a nearby system.  With greater numbers, the aliens attack again this time accomplishing their take-over of Earth.");
                    }
                    else {
                        console.log("The humans knew the aliens were coming and had counter-measures ready.  The mothership has been destroyed and the invasion is over.");    
                    }    
            }
            else {
                console.log("It is the machines that are the real threat!");
                var size = prompt("Do you have a LARGE or SMALL fleet?").toUpperCase();
                var weapon = prompt("Is your fleet equipped with CYBER or PIERCING weapons?").toUpperCase();

                    if (size === "LARGE" && weapon === "CYBER") {
                        console.log("The machines were busy fighting the humans.  With both machines and humans fighting each other, the aliens wipe out all enemies.  Aliens are victorious!");
                    }
                    else if (size === "LARGE" || weapon === "CYBER") {
                        console.log("The aliens realize the machines would make better allies than enemies.  An alliance is formed and Earth belongs to both machines and aliens.");
                    }
                    else {
                        console.log("The machines have upgraded themselves passing the aliens advanced technology.  They hack the mothership calling for all aliens to surrender or they will detonate the queens ship.  The aliens are forced to surrender.");    
                    }    
            }
    	}
	else {
	console.log("The aliens form a planetary siege on Earth just waiting outside of the planet.  They cut off all interplanetary trade forcing all those on Earth to surrender to the aliens.");
	}    
    break;

    default:
	console.log("So you choose to not take part in the war.  The other races respect your choice and all sides agree on peace.  Everyone Wins!");
};