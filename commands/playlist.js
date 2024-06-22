const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist enquanto joga o seu Games favorito"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/2MZRSzgpgPilcO4NBBVxJv?si=130f5f46ee064963")
    }
}