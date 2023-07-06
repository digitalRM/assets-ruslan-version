A = [-2 1 0 0 0; 1 -2 1 0 0; 0 1 -2 1 0; 0 0 1 -2 1; 0 0 0 1 -2];
b = (1:5)'/(5+1)^3;

% Part 1
M = [A,b];
[m,n] = size(M);
for j = 1:m
    if M(j,j)==0
        error('System cannot be solved by regular Gaussian elimination.');
    end
    for i = j+1:m
        l_ij = M(i,j)/M(j,j);
        M(i,j:n) = M(i,j:n)-l_ij*M(j,j:n);
    end
end
U = full(M)

% Part 2
% Back substitution on a m by m+1 upper triangular matrix U.
[m,n] = size(U);
x = U(:,m+1); % Initialize column vector of unknowns (to be updated).
x(m) = U(m,m+1)/U(m,m); % Solve last equation of augmented matrix.
for i = m-1:-1:1
    % i counts down from m-1 to 1 in intervals of 1.
    SUM = 0;
    for j = i+1:m
        SUM = SUM + U(i,j)*x(j);
    end
    x(i) = (U(i,n) - SUM)/U(i,i); % Updates the ith entry of x.
end
x % x is the solution of the linear system.


% Part 3
M = [A, b];
l_factor = spdiags([ones(m ,1)],0,m,m); 
[m,n] = size(M);
for j = 1:m
    if M(j,j)==0
        error('System cannot be solved by regular Gaussian elimination.');
    end
    for i = j+1:m
        l_ij = M(i,j)/M(j,j);
        l_factor(i,j) = l_ij;
        M(i,j:n) = M(i,j:n)-l_ij*M(j,j:n);
    end
end
u_factor = M(:,1:end-1);
l_factor = full(l_factor);
u_factor = full(u_factor);

result = A - l_factor*u_factor