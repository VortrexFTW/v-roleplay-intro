"use strict";

// ===========================================================================

// Games
const V_GAME_GTA_III = 1;
const V_GAME_GTA_VC = 2;
const V_GAME_GTA_SA = 3;
const V_GAME_GTA_IV = 5;
const V_GAME_GTA_IV_EFLC = 6;
const V_GAME_GTA_V = 50;
const V_GAME_MAFIA_ONE = 10;
const V_GAME_MAFIA_TWO = 11;
const V_GAME_MAFIA_THREE = 12;
const V_GAME_MAFIA_ONE_DE = 13;

// ===========================================================================

let introCameraPos = {
	[V_GAME_GTA_III]: new Vec3(-1176.48, -17.694, 95.992),
	[V_GAME_GTA_VC]: new Vec3(210.04, -1492.01, 55.071),
	[V_GAME_GTA_SA]: new Vec3(1292.31, -2037.57, 109.596),
	[V_GAME_GTA_IV]: new Vec3(8.75, -826.53, 331.072),
};

// ===========================================================================

let introCameraLookAt = {
	[V_GAME_GTA_III]: new Vec3(-1175.73, -17.055, 95.847),
	[V_GAME_GTA_VC]: new Vec3(240.19, -1282.52, 10.902),
	[V_GAME_GTA_SA]: new Vec3(1291.31, -2037.57, 109.171),
	[V_GAME_GTA_IV]: new Vec3(-63.58, 240.71, 26.373),
};

// ===========================================================================

bindEventHandler("OnResourceStart", thisResource, function (event, resource) {
	if (typeof gta == "undefined") {
		return false;
	}

	game.fadeCamera(true, 0.5);
	game.setCameraLookAt(introCameraPos[game.game], introCameraLookAt[game.game], true);
});

// ===========================================================================