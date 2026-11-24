
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

const commands = [
  new SlashCommandBuilder()
    .setName('say')
    .setDescription('Send a message')
    .addStringOption(o => o.setName('message').setDescription('Message').setRequired(true)),

  new SlashCommandBuilder()
    .setName('announce')
    .setDescription('Send an announcement')
    .addStringOption(o => o.setName('message').setDescription('Announcement').setRequired(true)),

  new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a member')
    .addUserOption(o => o.setName('user').setDescription('Member').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

  new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a member')
    .addUserOption(o => o.setName('user').setDescription('Member').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

  new SlashCommandBuilder()
    .setName('addrole')
    .setDescription('Add a role')
    .addUserOption(o => o.setName('user').setDescription('Member').setRequired(true))
    .addRoleOption(o => o.setName('role').setDescription('Role').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),

  new SlashCommandBuilder()
    .setName('removerole')
    .setDescription('Remove a role')
    .addUserOption(o => o.setName('user').setDescription('Member').setRequired(true))
    .addRoleOption(o => o.setName('role').setDescription('Role').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),

  new SlashCommandBuilder()
    .setName('gstart')
    .setDescription('Start a giveaway')
    .addStringOption(o => o.setName('prize').setDescription('Prize').setRequired(true)),

  new SlashCommandBuilder()
    .setName('gend')
    .setDescription('End a giveaway')
    .addStringOption(o => o.setName('message_id').setDescription('Giveaway message ID').setRequired(true)),

  new SlashCommandBuilder()
    .setName('setlevel')
    .setDescription('Set member level')
    .addUserOption(o => o.setName('user').setDescription('Member').setRequired(true))
    .addIntegerOption(o => o.setName('level').setDescription('Level').setRequired(true)),

  new SlashCommandBuilder()
    .setName('setxp')
    .setDescription('Set member XP')
    .addUserOption(o => o.setName('user').setDescription('Member').setRequired(true))
    .addIntegerOption(o => o.setName('xp').setDescription('XP').setRequired(true)),

  new SlashCommandBuilder()
    .setName('autorole')
    .setDescription('Set automatic role')
    .addRoleOption(o => o.setName('role').setDescription('Role').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),

  new SlashCommandBuilder()
    .setName('addroleall')
    .setDescription('Add role to all members')
    .addRoleOption(o => o.setName('role').setDescription('Role').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),

  new SlashCommandBuilder()
    .setName('removeroleall')
    .setDescription('Remove role from all members')
    .addRoleOption(o => o.setName('role').setDescription('Role').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),

  ...['ticketcreate', 'ticketsend', 'applicationcreate', 'applicationsend', 'applicationhistory']
    .map(name => new SlashCommandBuilder()
      .setName(name)
      .setDescription(`${name} command`))
];

module.exports = commands.map(command => command.toJSON());
