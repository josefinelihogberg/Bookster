const mockAuthenticate = jest.fn().mockResolvedValue({ success: true });
const mockRegister = jest.fn().mockResolvedValue({ success: true });

const authService = {
  authenticate: mockAuthenticate,
  register: mockRegister,
};

export default authService;
