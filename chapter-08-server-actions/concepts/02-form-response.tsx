// ==========================================
// Concept 8.2: useActionState (Loading & Errors)
// ==========================================

'use client';
import { useActionState } from 'react';
import { myServerAction } from './actions'; // Assuming it's in a separate file

export default function ActionStatePage() {
  // 1. state: server response, formAction: replaces action, isPending: loading
  const [state, formAction, isPending] = useActionState(myServerAction, null);

  return (
    <form action={formAction}>
      <input type="text" name="name" />
      <button disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}
      </button>
      {state?.error && <p className="text-red-500">{state.error}</p>}
      {state?.message && <p className="text-green-500">{state.message}</p>}
    </form>
  );
}