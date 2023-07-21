export const normalaziPhoneNumber = (value: string | null | undefined) =>
  value
    ?.replace(/\D/g, "")
    .match(/.{1,3}/g)
    ?.join("-")
    .substring(0, 11) || "";
