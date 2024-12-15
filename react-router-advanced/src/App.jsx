import ProtectedRoute from './components/ProtectedRoute';
const isAuthenticated = true; // Simulated authentication

<Route
  path="/profile/*"
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Profile />
    </ProtectedRoute>
  }
/>
