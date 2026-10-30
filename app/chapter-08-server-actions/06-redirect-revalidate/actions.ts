// The Server Action

'use server'

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export default async function submitData(formData: FormData) {

    const name = formData.get('name');
  
    // Simulate saving to a database
    console.log('Saving to DB:', name);

    // 1. Clear the cache for the current page so it fetches fresh data
    revalidatePath('/chapter-08-server-actions/06-redirect-revalidate');

    // 2. Send the user to a new page
    redirect('/chapter-08-server-actions/06-redirect-revalidate/success');
}
