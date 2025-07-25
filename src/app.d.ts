// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        interface PageData {
            auth: {
                logged_in: boolean;
                uuid: string;
            };
        }
        // interface PageState {}
        // interface Platform {}
    }
}

export { };
