import {
  pgTable,
  pgEnum,
  text,
  integer,
  boolean,
  timestamp,
  uuid,
  serial,
  index,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

const timestamps = {
  updated_at: timestamp().$onUpdate(() => new Date(Date.now())),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp(),
}

// Enums
export const ranklockType = pgEnum('ranklock_type', ['SectionUp', 'SectionDown', 'Normal']);
export const rankRequestResult = pgEnum('rank_request_result', ['Promotion', 'Demotion']);
export const rankRequestType = pgEnum('rank_request_type', ['Normal', 'Join', 'Xp']);
export const eventReward = pgEnum('event_reward', ['promote', 'medal', 'xp', 'rank']);

/** Account
 * A roblox ranker account used in the system
*/
export const account = pgTable('account', {
  id: uuid().primaryKey().defaultRandom(),
	robloxName: text().unique(),
  robloxId: text().notNull().unique(),
  password: text().notNull(),
  cookie: text().notNull(),

  ...timestamps
});

/**
 * Event
 */
export const event = pgTable('event', {
  id: uuid().primaryKey().defaultRandom(),
  eventId: text().unique(),
  guildId: text().notNull().references(() => guild.id),

  /** An array of user.id 's */
  awardees: text().notNull().array().default(sql`array[]::text[]`),
  initiatorId: text().notNull().references(() => user.id),

  /** A Discord message.id representing where the control panel was sent */
  panelMessageId: text().notNull(),

  /** An enum describing the type of reward to be given */
  rewardType: eventReward().notNull(),
  /** Reward data is encoded in a string and parsed during runtime */
  rewardData: text().notNull(),

  concludedBy: text().references(() => user.id),
  concluded_at: timestamp(),
  ...timestamps
});

/**
 * User
 */
export const user = pgTable('user', {
  id: uuid().primaryKey().defaultRandom(),
	discordId: text().unique(),
  robloxId: text().unique(),

  ...timestamps
});

/**
 * Guild
 */
export const guild = pgTable('guild', {
  id: uuid().primaryKey().defaultRandom(),
  discordGuildId: text().notNull().unique(),
  robloxGroupId: text().notNull().unique(),
  rankerRobloxId: text(),
  xpEnabled: boolean().default(false),
  apiEnabled: boolean().default(false),
  apiAuthToken: uuid().unique().defaultRandom(),


});

/**
 * Session
 */
export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id').notNull().references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
