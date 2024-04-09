import { currentUser } from "./auth";
import { db } from "./db";

const DAY_IN_MS = 1000 * 60 * 60 * 24;

export const checkSubscription = async () => {
  const user = await currentUser();
  if (!user) {
    return false;
  }
  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId: user.id,
    },
  });
  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return !!isValid;
};
